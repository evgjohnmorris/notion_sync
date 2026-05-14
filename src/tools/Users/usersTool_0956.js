/**
 * Generated Tool: usersTool_0956
 * Domain: Users
 * ID: 0956
 */
exports.usersTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0956:', error);
    throw error;
  }
};
