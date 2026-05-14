/**
 * Generated Tool: usersTool_0476
 * Domain: Users
 * ID: 0476
 */
exports.usersTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0476:', error);
    throw error;
  }
};
