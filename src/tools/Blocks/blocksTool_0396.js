/**
 * Generated Tool: blocksTool_0396
 * Domain: Blocks
 * ID: 0396
 */
exports.blocksTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0396:', error);
    throw error;
  }
};
