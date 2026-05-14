/**
 * Generated Tool: usersTool_0801
 * Domain: Users
 * ID: 0801
 */
exports.usersTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0801:', error);
    throw error;
  }
};
