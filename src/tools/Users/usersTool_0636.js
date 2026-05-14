/**
 * Generated Tool: usersTool_0636
 * Domain: Users
 * ID: 0636
 */
exports.usersTool_0636 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0636:', error);
    throw error;
  }
};
