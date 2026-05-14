/**
 * Generated Tool: usersTool_0250
 * Domain: Users
 * ID: 0250
 */
exports.usersTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0250:', error);
    throw error;
  }
};
