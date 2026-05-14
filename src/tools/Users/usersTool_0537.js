/**
 * Generated Tool: usersTool_0537
 * Domain: Users
 * ID: 0537
 */
exports.usersTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0537:', error);
    throw error;
  }
};
