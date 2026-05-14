/**
 * Generated Tool: usersTool_0090
 * Domain: Users
 * ID: 0090
 */
exports.usersTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0090:', error);
    throw error;
  }
};
