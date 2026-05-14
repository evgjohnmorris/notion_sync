/**
 * Generated Tool: usersTool_0972
 * Domain: Users
 * ID: 0972
 */
exports.usersTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0972:', error);
    throw error;
  }
};
