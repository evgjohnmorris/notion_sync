/**
 * Generated Tool: usersTool_0148
 * Domain: Users
 * ID: 0148
 */
exports.usersTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0148:', error);
    throw error;
  }
};
