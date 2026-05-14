/**
 * Generated Tool: usersTool_0592
 * Domain: Users
 * ID: 0592
 */
exports.usersTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0592:', error);
    throw error;
  }
};
