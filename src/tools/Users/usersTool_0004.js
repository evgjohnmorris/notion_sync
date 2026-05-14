/**
 * Generated Tool: usersTool_0004
 * Domain: Users
 * ID: 0004
 */
exports.usersTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0004:', error);
    throw error;
  }
};
