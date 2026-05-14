/**
 * Generated Tool: usersTool_0300
 * Domain: Users
 * ID: 0300
 */
exports.usersTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0300:', error);
    throw error;
  }
};
