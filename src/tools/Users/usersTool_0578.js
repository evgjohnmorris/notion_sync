/**
 * Generated Tool: usersTool_0578
 * Domain: Users
 * ID: 0578
 */
exports.usersTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0578:', error);
    throw error;
  }
};
