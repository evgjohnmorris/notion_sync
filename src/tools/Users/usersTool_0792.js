/**
 * Generated Tool: usersTool_0792
 * Domain: Users
 * ID: 0792
 */
exports.usersTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0792:', error);
    throw error;
  }
};
