/**
 * Generated Tool: blocksTool_0385
 * Domain: Blocks
 * ID: 0385
 */
exports.blocksTool_0385 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0385:', error);
    throw error;
  }
};
