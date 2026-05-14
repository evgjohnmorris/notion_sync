/**
 * Generated Tool: usersTool_0722
 * Domain: Users
 * ID: 0722
 */
exports.usersTool_0722 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0722:', error);
    throw error;
  }
};
