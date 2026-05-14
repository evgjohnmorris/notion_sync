/**
 * Generated Tool: usersTool_0000
 * Domain: Users
 * ID: 0000
 */
exports.usersTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0000:', error);
    throw error;
  }
};
