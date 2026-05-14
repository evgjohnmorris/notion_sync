/**
 * Generated Tool: usersTool_0447
 * Domain: Users
 * ID: 0447
 */
exports.usersTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0447:', error);
    throw error;
  }
};
