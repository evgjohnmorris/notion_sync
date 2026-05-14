/**
 * Generated Tool: usersTool_0330
 * Domain: Users
 * ID: 0330
 */
exports.usersTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0330:', error);
    throw error;
  }
};
