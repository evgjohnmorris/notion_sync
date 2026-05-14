/**
 * Generated Tool: workspacesTool_0859
 * Domain: Workspaces
 * ID: 0859
 */
exports.workspacesTool_0859 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0859:', error);
    throw error;
  }
};
