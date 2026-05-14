/**
 * Generated Tool: usersTool_0739
 * Domain: Users
 * ID: 0739
 */
exports.usersTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0739:', error);
    throw error;
  }
};
