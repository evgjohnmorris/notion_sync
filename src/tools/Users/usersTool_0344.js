/**
 * Generated Tool: usersTool_0344
 * Domain: Users
 * ID: 0344
 */
exports.usersTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0344:', error);
    throw error;
  }
};
