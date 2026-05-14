/**
 * Generated Tool: usersTool_0580
 * Domain: Users
 * ID: 0580
 */
exports.usersTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0580:', error);
    throw error;
  }
};
