/**
 * Generated Tool: usersTool_0062
 * Domain: Users
 * ID: 0062
 */
exports.usersTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0062:', error);
    throw error;
  }
};
