/**
 * Generated Tool: usersTool_0988
 * Domain: Users
 * ID: 0988
 */
exports.usersTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0988:', error);
    throw error;
  }
};
