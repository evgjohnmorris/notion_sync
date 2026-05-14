/**
 * Generated Tool: usersTool_0232
 * Domain: Users
 * ID: 0232
 */
exports.usersTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0232:', error);
    throw error;
  }
};
