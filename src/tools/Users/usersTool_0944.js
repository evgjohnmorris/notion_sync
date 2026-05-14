/**
 * Generated Tool: usersTool_0944
 * Domain: Users
 * ID: 0944
 */
exports.usersTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0944:', error);
    throw error;
  }
};
