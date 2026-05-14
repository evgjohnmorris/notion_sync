/**
 * Generated Tool: usersTool_0619
 * Domain: Users
 * ID: 0619
 */
exports.usersTool_0619 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0619:', error);
    throw error;
  }
};
