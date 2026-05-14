/**
 * Generated Tool: usersTool_0213
 * Domain: Users
 * ID: 0213
 */
exports.usersTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0213:', error);
    throw error;
  }
};
