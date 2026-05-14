/**
 * Generated Tool: blocksTool_0363
 * Domain: Blocks
 * ID: 0363
 */
exports.blocksTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0363:', error);
    throw error;
  }
};
