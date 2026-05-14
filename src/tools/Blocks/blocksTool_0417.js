/**
 * Generated Tool: blocksTool_0417
 * Domain: Blocks
 * ID: 0417
 */
exports.blocksTool_0417 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0417:', error);
    throw error;
  }
};
