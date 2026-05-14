/**
 * Generated Tool: usersTool_0854
 * Domain: Users
 * ID: 0854
 */
exports.usersTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0854:', error);
    throw error;
  }
};
