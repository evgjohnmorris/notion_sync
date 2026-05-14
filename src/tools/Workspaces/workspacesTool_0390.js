/**
 * Generated Tool: workspacesTool_0390
 * Domain: Workspaces
 * ID: 0390
 */
exports.workspacesTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0390:', error);
    throw error;
  }
};
