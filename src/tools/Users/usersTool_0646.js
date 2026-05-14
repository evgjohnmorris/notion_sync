/**
 * Generated Tool: usersTool_0646
 * Domain: Users
 * ID: 0646
 */
exports.usersTool_0646 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0646:', error);
    throw error;
  }
};
