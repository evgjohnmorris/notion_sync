/**
 * Generated Tool: usersTool_0928
 * Domain: Users
 * ID: 0928
 */
exports.usersTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0928:', error);
    throw error;
  }
};
