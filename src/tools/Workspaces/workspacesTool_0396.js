/**
 * Generated Tool: workspacesTool_0396
 * Domain: Workspaces
 * ID: 0396
 */
exports.workspacesTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0396:', error);
    throw error;
  }
};
