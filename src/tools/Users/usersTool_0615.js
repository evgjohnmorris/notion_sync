/**
 * Generated Tool: usersTool_0615
 * Domain: Users
 * ID: 0615
 */
exports.usersTool_0615 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0615:', error);
    throw error;
  }
};
