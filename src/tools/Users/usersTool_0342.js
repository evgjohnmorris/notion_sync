/**
 * Generated Tool: usersTool_0342
 * Domain: Users
 * ID: 0342
 */
exports.usersTool_0342 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0342:', error);
    throw error;
  }
};
