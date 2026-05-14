/**
 * Generated Tool: usersTool_0247
 * Domain: Users
 * ID: 0247
 */
exports.usersTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0247:', error);
    throw error;
  }
};
