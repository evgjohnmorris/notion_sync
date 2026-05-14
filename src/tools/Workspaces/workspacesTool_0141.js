/**
 * Generated Tool: workspacesTool_0141
 * Domain: Workspaces
 * ID: 0141
 */
exports.workspacesTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0141:', error);
    throw error;
  }
};
