/**
 * Generated Tool: usersTool_0005
 * Domain: Users
 * ID: 0005
 */
exports.usersTool_0005 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0005:', error);
    throw error;
  }
};
