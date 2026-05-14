/**
 * Generated Tool: usersTool_0522
 * Domain: Users
 * ID: 0522
 */
exports.usersTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0522:', error);
    throw error;
  }
};
