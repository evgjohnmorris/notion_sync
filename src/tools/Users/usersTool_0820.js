/**
 * Generated Tool: usersTool_0820
 * Domain: Users
 * ID: 0820
 */
exports.usersTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0820:', error);
    throw error;
  }
};
