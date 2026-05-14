/**
 * Generated Tool: usersTool_0954
 * Domain: Users
 * ID: 0954
 */
exports.usersTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0954:', error);
    throw error;
  }
};
