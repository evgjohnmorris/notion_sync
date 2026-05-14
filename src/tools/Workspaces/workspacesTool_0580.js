/**
 * Generated Tool: workspacesTool_0580
 * Domain: Workspaces
 * ID: 0580
 */
exports.workspacesTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0580:', error);
    throw error;
  }
};
