/**
 * Generated Tool: usersTool_0568
 * Domain: Users
 * ID: 0568
 */
exports.usersTool_0568 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0568:', error);
    throw error;
  }
};
