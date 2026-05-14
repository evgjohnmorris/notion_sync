/**
 * Generated Tool: blocksTool_0378
 * Domain: Blocks
 * ID: 0378
 */
exports.blocksTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0378:', error);
    throw error;
  }
};
