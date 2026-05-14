/**
 * Generated Tool: usersTool_0113
 * Domain: Users
 * ID: 0113
 */
exports.usersTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0113:', error);
    throw error;
  }
};
