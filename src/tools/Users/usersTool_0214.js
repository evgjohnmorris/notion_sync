/**
 * Generated Tool: usersTool_0214
 * Domain: Users
 * ID: 0214
 */
exports.usersTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0214:', error);
    throw error;
  }
};
