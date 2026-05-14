/**
 * Generated Tool: usersTool_0401
 * Domain: Users
 * ID: 0401
 */
exports.usersTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0401:', error);
    throw error;
  }
};
