/**
 * Generated Tool: usersTool_0713
 * Domain: Users
 * ID: 0713
 */
exports.usersTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0713:', error);
    throw error;
  }
};
