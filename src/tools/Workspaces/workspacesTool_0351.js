/**
 * Generated Tool: workspacesTool_0351
 * Domain: Workspaces
 * ID: 0351
 */
exports.workspacesTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0351:', error);
    throw error;
  }
};
